import { defineConfig } from 'orval'
import { commonHooks, commonOutputConfig } from './base.orval.config'

console.log(process.env.REACT_APP_API_TARGET_URL)

export default defineConfig({
  store: {
    output: commonOutputConfig,
    hooks: commonHooks,
    input: {
      target: 'http://localhost:8080/api/public/api-docs/json', // OpenAPI JSON 파일 URL (Swagger UI에서 제공하는 OpenAPI JSON URL)
      validation: false, // OpenAPI Validation 비활성화 (선택사항)
    },
  },
})
