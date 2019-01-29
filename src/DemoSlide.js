import React from 'react'
import {Appear} from 'mdx-deck'
import {CodeBlock} from './CodeBlock';

export function DemoSlide({title, followCode, code}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column-reverse'}}>
      <div>
        <div>{title}</div>
      </div>
      <Appear>
        <div>
          <CodeBlock style={{fontSize: 30}}>{code.trim()}</CodeBlock>
        </div>
        {followCode ? (
          <div>
            <CodeBlock
              style={{
                fontSize: 30,
                position: 'absolute',
                top: '20px',
                zIndex: '2',
              }}
            >
              {followCode.trim()}
            </CodeBlock>
          </div>
        ) : null}
      </Appear>
    </div>
  )
}
