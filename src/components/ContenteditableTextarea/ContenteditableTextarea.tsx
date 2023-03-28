import React from 'react'
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";


interface ContenteditableTextareaProps {
  text: string,
  setContentDesc: (evt: ContentEditableEvent) => void,
}

const ContenteditableTextarea = ({ setContentDesc, text = '' }: ContenteditableTextareaProps) => {

  return (
    <ContentEditable
      className='contenteditableTextarea'
      html={text} // innerHTML of the editable div
      disabled={false} // use true to disable edition
      onChange={setContentDesc} // handle innerHTML change

    />
  )
}

export default ContenteditableTextarea