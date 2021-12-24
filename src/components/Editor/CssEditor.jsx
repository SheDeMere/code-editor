import React, {useContext} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-css"
import "ace-builds/src-min-noconflict/theme-monokai"
import "ace-builds/src-min-noconflict/snippets/css"
import "ace-builds/src-min-noconflict/ext-language_tools"
import {EditorContext} from "../../context/Context";
const CssEditor = () => {
    const {css, setCss} = useContext(EditorContext)
    return (
        <AceEditor
            value={css}
            onChange={value => setCss(value)}
            placeholder='Введите CSS код'
            mode='css'
            theme='monokai'
            name='editor_css'
            fontSize={16}
            height={'100%'}
            width={'100%'}
            showPrintMargin={true}
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

export default CssEditor;