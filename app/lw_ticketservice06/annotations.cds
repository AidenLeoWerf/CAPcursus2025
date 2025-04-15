using CatalogService as service from '../../srv/cat-service';
annotate service.Projects with @(
    UI.SelectionFields:[Name, Client, ID],
    UI.LineItem:[{$Type: 'UI.DataField',
                  Value: Client}],
    UI.HeaderInfo: []
);
annotate service.Employees with @() ;


