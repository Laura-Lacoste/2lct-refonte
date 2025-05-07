import React from 'react'
import Image from 'next/image'

export const Thumb = (props) => {
  const { selected, index, onClick, image } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <Image
          src={`/${image}`}
          alt={`Miniature ${index + 1}`}
          width={80}
          height={56}
          className="w-full h-auto object-contain rounded-lg border-2 shadow-lg"
        />
      </button>
    </div>
  )
}
