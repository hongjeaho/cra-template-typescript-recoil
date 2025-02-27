import { type HooksOptions, type OutputOptions } from 'orval'

export const commonOutputConfig: OutputOptions = {
  mode: 'tags-split',
  target: '../src/api',
  schemas: '../src/model',
  client: 'react-query',
  httpClient: 'axios',
  clean: true,
  prettier: true,
  mock: false,
  allParamsOptional: true,
  urlEncodeParameters: true,
  override: {
    mutator: {
      path: '../src/utils/http.ts',
      name: 'request',
    },
    query: {
      useQuery: true,
      useMutation: true,
      useInfinite: true,
      useInfiniteQueryParam: 'nextId',
      options: {
        staleTime: 10000,
      },
    },
  },
}

export const commonHooks: Partial<HooksOptions> = {
  afterAllFilesWrite: 'prettier --write',
}
