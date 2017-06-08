
interface ITMenu {
  title: string
  url: string
}

interface ITstore {
  readonly menu: ITMenu[]
  [propName: string]: any
}

interface ITAction {
  type: string
  [propName: string]: any
}

const initialState: ITstore = {
  menu:[{
    title: '首页',
    url: ''
  }, {
    title: '接口',
    url: '/api'
  }, {
    title: '配置',
    url: '/modify'
  }]
}

export default (state: ITstore = initialState, action: ITAction): ITstore  => {
  switch(action.type) {
    default:
    return state
  }
}