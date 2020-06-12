import React from 'react'

type TProps = {
  title: string
  titleTop: string
  spanTitle?: string
}

const Title: React.FC<TProps> = ({title, titleTop, spanTitle}) => {
  return (
    <>
      <h4 className="spec-title">
        {titleTop}
      </h4>
      <h3 className='title'>
        {title}
        {!!spanTitle && <span>{spanTitle}</span>}
      </h3>
    </>
  )
}

export default Title