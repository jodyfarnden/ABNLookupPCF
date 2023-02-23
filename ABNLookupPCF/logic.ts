export class ABR {
    isValidABN(rawAbn: string | number): boolean {
        const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        if (!rawAbn) {
          return false;
        }
      
        // strip non-alphanumeric characters
        const abn = rawAbn.toString().replace(/[^a-z\d]/gi, '');
      
        // check if length is 11 digits
        if (abn.length !== 11) {
          return false;
        }
      
        // apply ato check method
        let sum = 0;
        weights.forEach((weight, position) => {
          const digit = Number(abn[position]) - (position ? 0 : 1);
          sum += weight * digit;
        });
      
        const checksum = sum % 89;
      
        return checksum === 0;
      }
    
    static async searchByABN(abrGUID: string, ABN: string, includeHistoricalDetails:boolean = false) {
        const convert = require('xml-js');
        //get request for data
        const url: string = 'https://abr.business.gov.au/abrxmlsearch/ABRXMLSearch.asmx/SearchByABNv202001?searchString='+ABN+'&includeHistoricalDetails=Y&authenticationGuid='+abrGUID;
        const init: RequestInit = {
            method: 'GET'
        };
        const request = new Request(url, init);

        return await fetch(request)
        .then(response => {
            return response.text()
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
                .then(data => {
                    return this.readABNSearchResponse(data);
                    });
        });
    }

    private static readABNSearchResponse (responseData: XMLDocument) {
        //format response to show in control
        let element = responseData.getElementsByTagName('businessEntity202001')[0]; 
        let mainName = element.getElementsByTagName('mainName')[0];
        let orgName = mainName.getElementsByTagName('organisationName')[0];
        let name = orgName.textContent;
        return name;
    }
}