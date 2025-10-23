import { updateDeploymentStatus } from '../path/to/deploymentScript';

describe('updateDeploymentStatus', () => {
    it('should update status to success', () => {
        expect(updateDeploymentStatus('success')).toBe('success');
    });

    it('should update status to failed', () => {
        expect(updateDeploymentStatus('failed')).toBe('failed');
    });

    it('should update status to in-progress', () => {
        expect(updateDeploymentStatus('in-progress')).toBe('in-progress');
    });

    it('should throw an error for invalid status', () => {
        expect(() => updateDeploymentStatus('invalid')).toThrowError('Invalid status');
    });

    it('should throw an error for null or empty status', () => {
        expect(() => updateDeploymentStatus(null)).toThrowError('Invalid status');
        expect(() => updateDeploymentStatus('')).toThrowError('Invalid status');
    });
});
