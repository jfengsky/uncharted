export const getPageTypeName = (pageTypeList: any[], id: string): string => {
  let pageTypeName = ''
  pageTypeList.some(({ _id, name }, index) => {
    if (_id === id) {
      pageTypeName = name
      return true
    }
  })

  return pageTypeName
}

export const getQueryStringByName = (name: string) => {
  let result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"))
  if (result == null || result.length < 1) {
    return ""
  }
  return result[1]
}