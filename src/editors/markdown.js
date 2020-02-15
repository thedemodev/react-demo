import React, {useState} from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import 'react-mde/lib/styles/css/react-mde-all.css'


const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
})

const Markdown = props => {
  const [selectedTab, setSelectedTab] = useState('write')
  return (
    <ReactMde
      generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
      value={props.value}
      onChange={props.setValue}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
    />
  )
}

export default Markdown
