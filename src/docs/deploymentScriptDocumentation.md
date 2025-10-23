## Deployment Script Documentation
### Deployment Status Update
This section documents the functions involved in updating deployment statuses.

#### `updateDeploymentStatus`
- Updates the deployment status based on the provided value. 
- Throws errors for invalid, null, or empty values.
- Acceptable values: 'success', 'failed', 'in-progress'.
- **Unit Tests Added**: Tests validate valid updates, invalid status handling, and edge cases.

### Testing
Unit tests have been added in the `src/tests/updateDeploymentStatus.test.ts` file to validate the proper functioning of deployment status updates.