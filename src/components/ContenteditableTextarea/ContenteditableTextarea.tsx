import React from 'react'
import ContentEditable from "react-contenteditable";


interface ContenteditableTextareaProps {
  text: string ,
  setContentDesc: (evtText: any) => void,
}

const ContenteditableTextarea = ({setContentDesc, text = ''}:ContenteditableTextareaProps) => {

  const handleChange = (evt: any) => {
    setContentDesc({ html: evt.target.value })
  };

  return (
    <ContentEditable
    className='contenteditableTextarea'
      html={text} // innerHTML of the editable div
      disabled={false} // use true to disable edition
      onChange={handleChange} // handle innerHTML change

    />
  )
}

export default ContenteditableTextarea