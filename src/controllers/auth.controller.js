import logger from '#config/logger.js';
import { signupSchema } from '#validations/auth.validation.js';
import { formatValidationError } from '#utils/format.js';

export const signup = async (req, res, next) => {
  try {
  } catch (e) {
    logger.error('Signup Error', e);

    if (e.message == 'User with email already exists') {
      return res.status(409).json({ error: 'Email already exist' });
    }
    next(e);
  }
};
