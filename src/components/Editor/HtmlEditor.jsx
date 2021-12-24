import React, {useContext} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-html"
import "ace-builds/src-min-noconflict/theme-monokai"
import "ace-builds/src-min-noconflict/snippets/html"
import "ace-builds/src-min-noconflict/ext-language_tools"
import {EditorContext} from "../../context/Context";
const HtmlEditor = () => {
    const {html, setHtml} = useContext(EditorContext)
    return (
        <AceEditor
            value={html}
            onChange={value => setHtml(value)}
            placeholder='Введите HTML код'
            mode='html'
            theme='monokai'
            name='editor_html'
            fontSize={16}
            height={'100%'}
            width={'100%'}
            showPrintMargin={false}
            showGutter={false}
            highLightActiveLine={true}
            setOptions = {{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                tabSize: 2
            }}
        />
    );
};

export default HtmlEditor;