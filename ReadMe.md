
# ABN Lookup PCF Control

## Overview
This PCF control takes an Australian Business Number (ABN) from a text field and validates it with the Australian Business Services (ABR) ABN Lookup web services. It returns the most recent business name to display.

## Dependencies
This project requires:
- VS Code
- Power Platform Tools extension v1.1.16+
- Node.js v18.14+

## Accessing the Australian Business Services (ABR) web api
Documentation on the ABR web services is available at https://abr.business.gov.au/Documentation/Default

In order to connect to the web services you will need to register with ABR, by going to the "Web Services Registration", reading and accepting the web services agreement and completing a registration form.

After the ABR have processed your registration you will be issued with a GUID that must be passed to every web call as authentication.

## Features
Currently this control only has one web call to the ABR - the Search by ABN command SearchByABNv202001

This web call returns the Business Entity details, such as Legal/Business Names, ABN status, and State & Postcode of the registration.

## Building this Control
1. Run npm install to retrieve all packages
2. Run npm run build to build the project
3. Run npm start watch to launch the control in the PowerApps component framework Test Environment

## Testing
The PowerApps component framework Test Environment will run in a new browser and display the control. 
You will need to enter the GUID given to you by ABR in the "ABRid" property. 
After this is set you can type any abn into the text box and press the validate button to test the control.

## Deployment
To deploy the solution, follow the instructions at https://learn.microsoft.com/en-us/power-apps/developer/component-framework/implementing-controls-using-typescript?tabs=before#packaging-your-code-components


## Resources
For more inforamtion about PCF controls, see the Microsoft Learn pages: https://learn.microsoft.com/en-us/power-apps/developer/component-framework/implementing-controls-using-typescript

## Future Features TODO
This control is a Work In Progress, here are some of the features that are on the improvements list
- More styling
- Extension of validation pre-api call
- Calls to different web services
- Returning data to fields (currently only dispalying Business name)
- Potential move to Fluid UI components to better match Dynamics 365 roadmap

