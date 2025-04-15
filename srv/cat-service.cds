using mynsdb as myschema from '../db/schema';

service CatalogService {
 entity Employees as projection on myschema.master.Employees{*, Projects};
    entity Projects as projection on myschema.master.Projects{*, Employees, Incidents};
    entity EmployeeProjects as projection on myschema.master.EmployeeProjects{*,Employee, Project};
    entity Incidents as projection on myschema.master.Incidents{ *, Details, Project, Employee};
    entity IncidentDetails as projection on myschema.transaction.IncidentDetails{ *,Incident};
 
    action updateStatus() returns IncidentDetails;
}