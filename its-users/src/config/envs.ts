import * as dotenv from 'dotenv';
import * as joi from 'joi';

dotenv.config();

//Define los tipos esperados para las variables.
interface EnvVars {
  PORT: number;
  GATEWAY_HOST: string;
  GATEWAY_PORT: number;
}

//Define el esquema de validación.
const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    GATEWAY_HOST: joi.string().required(),
    GATEWAY_PORT: joi.number().required(),
  })
  .unknown(true);

  //Si alguna variable no está bien definida, lanza un error.
const { error, value } = envsSchema.validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

const envVars: EnvVars = value;

//Exporta el objeto envs con las variables listas para usar.
export const envs = {
  PORT: envVars.PORT,
  GATEWAY_HOST: envVars.GATEWAY_HOST,
  GATEWAY_PORT: envVars.GATEWAY_PORT,
};
