import React from 'react'

type TProps = {
  count: number
  title: string
  linkTitle: string
  linkUrl?: string
}

const CaseItem: React.FC<TProps> =
  ({count, title, linkTitle, linkUrl}) => {
    return (
      <div className='case-item'>
        <div className='case-item__count'>{count}</div>
        <div className='case-item__title'>{title}</div>
        <div className='case-item__link-title'>
          <a href={linkUrl}>{linkTitle}</a>
        </div>

      </div>
    )
  }

export default CaseItem