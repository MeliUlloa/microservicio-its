import * as dotenv from 'dotenv';
import * as joi from 'joi';

dotenv.config();

interface EnvVars {
  PORT: number;
  GATEWAY_HOST: string;
  GATEWAY_PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    GATEWAY_HOST: joi.string().required(),
    GATEWAY_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

const envVars: EnvVars = value;

export const envs = {
  PORT: envVars.PORT,
  GATEWAY_HOST: envVars.GATEWAY_HOST,
  GATEWAY_PORT: envVars.GATEWAY_PORT,
};
