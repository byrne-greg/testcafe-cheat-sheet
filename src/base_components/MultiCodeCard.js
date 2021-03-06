import React, { useState } from "react";
import {
  Card,
  Button,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  ListGroup
} from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CodeHighlight, MultiCodeHighlight } from "./CodeHighlight";
import CardHeader from "../base_components/CardHeader";

const CodeCard = ({ cardTitle, fullDocLink, codeSections }) => {
  const [isShowingOptions, setIsShowingOptions] = useState(false);
  const [isShowingExample, setIsShowingExample] = useState(false);

  return (
    <Card>
      <CardHeader title={cardTitle} docLink={fullDocLink} />
      {codeSections.map(({ description, language, code, options, example }) => (
        <ListGroup key={description}>
          <ListGroup.Item>
            <Card.Body>
              {description ? <Card.Text>{description}</Card.Text> : null}
              <MultiCodeHighlight code={code} language={language} />
            </Card.Body>
            {options ? (
              <Card.Body>
                <Card.Title>Options</Card.Title>
                <ButtonToolbar style={{ paddingBottom: "10px" }}>
                  <ToggleButtonGroup
                    type="radio"
                    name="options"
                    defaultValue={2}
                  >
                    <ToggleButton
                      variant="outline-secondary"
                      value={1}
                      onClick={() => setIsShowingOptions(true)}
                    >
                      Show
                    </ToggleButton>
                    <ToggleButton
                      variant="outline-secondary"
                      value={2}
                      onClick={() => setIsShowingOptions(false)}
                    >
                      Hide
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
                {isShowingOptions ? (
                  <CodeHighlight language={language}>{options}</CodeHighlight>
                ) : null}
              </Card.Body>
            ) : null}

            {example ? (
              <Card.Body>
                <Card.Title>Example</Card.Title>
                <ButtonToolbar style={{ paddingBottom: "10px" }}>
                  <ToggleButtonGroup
                    type="radio"
                    name="example"
                    defaultValue={2}
                  >
                    <ToggleButton
                      variant="outline-secondary"
                      value={1}
                      onClick={() => setIsShowingExample(true)}
                    >
                      Show
                    </ToggleButton>
                    <ToggleButton
                      variant="outline-secondary"
                      value={2}
                      onClick={() => setIsShowingExample(false)}
                    >
                      Hide
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
                {isShowingExample ? (
                  <>
                    <CodeHighlight language={language}>{example}</CodeHighlight>
                    {document.queryCommandSupported("copy") && (
                      <CopyToClipboard text={code} onCopy={() => {}}>
                        <Button variant="info">Copy</Button>
                      </CopyToClipboard>
                    )}
                  </>
                ) : null}
              </Card.Body>
            ) : null}
          </ListGroup.Item>
        </ListGroup>
      ))}
    </Card>
  );
};

export default CodeCard;
