const config: {
  base_url: {
    base: string
    dev: string
    pro: string
    test: string
  }
  result_code: number | string
  default_headers: AxiosHeaders
  request_timeout: number
} = {
    base_url: {
        base: '',
        dev: '',
        pro: '',
        test: ''
    },
    result_code: '',
    default_headers: 'application/json',
    request_timeout: 6000
}
export default config
