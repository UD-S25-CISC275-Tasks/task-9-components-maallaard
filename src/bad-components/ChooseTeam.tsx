import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Ada Lovelace",
    "Alan Turing",
    "Barbara Liskov",
    "Charles Babbage",
    "Grace Hopper",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [allOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);
    function ChooseMember(team: string[], newMember: string) {
        if (!team.includes(newMember)) {
            setTeam([...team, newMember]);
        }
    }
    function ClearTeam() {
        setTeam([]);
    }
    return (
        <div>
            <h2>ChooseTeam</h2>
            <Row>
                <Col>
                    {allOptions.map((x: string) => (
                        <div key={x}>
                            ChooseMember{" "}
                            <Button
                                onClick={() => {
                                    ChooseMember(team, x);
                                }}
                            >
                                {x}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team: </strong>
                    {team.map((x: string) => (
                        <li key={x}>{x}</li>
                    ))}
                    <Button onClick={ClearTeam}>ClearTeam</Button>
                </Col>
            </Row>
        </div>
    );
}
