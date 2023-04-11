import { post } from '@/api/common/request'

// 获取课程 游客模式
export const getCourseV = () => {
  return post('/course/visitor/getcourse/')
}

// 获取章节 游客模式
export const getSectionV = (cindex: string) => {
  return post('/course/visitor/getsection/', { cindex })
}

// 获取vr 游客模式
export const getVrV = () => {
  return post('/vr/visitor/')
}
