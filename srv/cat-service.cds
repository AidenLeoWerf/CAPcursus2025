using mynsdb as myschema from '../db/schema';

service CatalogService {
 entity Employees as projection on myschema.Employees;
    entity Projects as projection on myschema.Projects;
    entity EmployeeProjects as projection on myschema.EmployeeProjects;
    entity Incidents as projection on myschema.Incidents;
    entity IncidentDetails as projection on myschema.IncidentDetails;
 
    action updateStatus() returns IncidentDetails;
}