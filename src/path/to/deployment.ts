// Function to update deployment status
/**
 * Updates the status of the deployment.
 * @param {string} status - The new status for the deployment.
 * @throws Will throw an error if the status is invalid, null, or empty.
 * @returns {string} Success message after status update.
 */
export function updateDeploymentStatus(status: string): string {
  if (!status) {
    throw new Error('Status cannot be null or empty.');
  }
  const validStatuses = ['success', 'failed', 'in-progress'];
  if (!validStatuses.includes(status)) {
    throw new Error('Invalid deployment status.');
  }
  // Here, additional logic for updating the deployment...
  return `Deployment status updated to ${status}.`;
}
