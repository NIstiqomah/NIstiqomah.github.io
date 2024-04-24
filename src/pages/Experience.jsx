import { Badge, Button, Card, Col, Container, Row, Stack } from 'react-bootstrap';
import './styles/Experience.scss';
import {
    GeoAltFill,
    Check,
    PersonWorkspace,
    PersonVideo3,
    PeopleFill,
    HouseDoorFill,
    ClockFill,
    BuildingsFill,
    ArrowLeft,
} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
    const navigate = useNavigate();
    const works = [
        {
            icon: <PersonWorkspace size={40} color="#feece2" />,
            title: 'WORK',
            place: 'PUSDATIN KEMENSOS RI',
            location: 'Jakarta',
            position: 'Web Programmer',
            period: 'Nov 2022 – Now',
            jobdesk: [
                `Design and build the user interface using
            Typescript and React Js`,
                `Collaborate with back-end developers to
            improve usability`,
            ],
            skill: [`Typescript`, `React Js`, `Material UI`, `PHP`],
        },
        {
            icon: <PersonVideo3 size={40} color="#feece2" />,
            title: 'INTERNSHIP',
            place: 'TELKOM AKSES',
            location: 'Surabaya',
            position: 'Optical Network Designer',
            period: 'Jan – Apr 2021',
            jobdesk: [
                `Designed optical networks in various areas in
                Surabaya using AutoCAD`,
                `Processed optical device data using Microsoft
                Excel`,
            ],
            skill: [`Optical Network`, `AutoCAD`, `Microsoft Office`],
        },
    ];
    const organization = [
        {
            name: 'MPK',
            icon: <HouseDoorFill />,
            place: 'MAN 1 Gresik',
            position: 'General Staff',
            period: '2015 - 2016',
            jobdesk: [
                `Supervised, monitored, and assisted the
            program implementation`,
                `Evaluated student council performance`,
            ],
        },
        {
            name: 'OSIS',
            icon: <HouseDoorFill />,
            place: 'MAN 1 Gresik',
            position: 'Head of Creativity, Skills, and Entrepreneurship Department',
            period: '2016 - 2017',
            jobdesk: [
                `Led and organized activities to increase
            creativity, skills, and profit`,
            ],
        },
        {
            name: 'BEM',
            icon: <BuildingsFill />,
            place: 'PENS',
            position: 'Junior Staff of Social Department',
            period: '2019 - 2021',
            jobdesk: [
                `Created and carried out social programs both
            outside and inside campus`,
            ],
        },
        {
            name: 'BEM',
            icon: <BuildingsFill />,
            place: 'PENS',
            position: 'Head of Social Department',
            period: '2021 - 2022',
            jobdesk: [
                `Led, coordinated, and controlled members in
            carrying out social activities`,
                `Led departmental meetings`,
            ],
        },
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <Button
                    className="back-btn"
                    style={{
                        backgroundColor: '#feece2',
                        border: 'none',
                        color: '#1C123E',
                    }}
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    <Stack direction="horizontal" gap={2}>
                        <div className="back-icon">
                            <ArrowLeft />
                        </div>
                        <span>Back</span>
                    </Stack>
                </Button>
                <h2>EXPERIENCE</h2>
                <Row m={10}>
                    {works.map((el, id) => {
                        return (
                            <Col sm={12} lg={6} key={id}>
                                <Stack className={'p-' + el.title} direction="horizontal" gap={2}>
                                    <div className="work-icon">{el.icon}</div>
                                    <h4>{el.title}</h4>
                                </Stack>
                                <Card className={el.title+"d-flex justify-content-center"}>
                                    <Card.Header>
                                        <Stack direction="horizontal">
                                            <div className="p-1">{el.place}</div>
                                            <div className="p-2 ms-auto">
                                                <GeoAltFill /> {el.location}
                                            </div>
                                        </Stack>
                                    </Card.Header>
                                    <Card.Body style={{ paddingTop: 0 }}>
                                        <Card.Title>
                                            <Stack direction="horizontal">
                                                <div className="p-1">{el.position}</div>
                                                <div className="p-2 ms-auto">
                                                    <ClockFill /> {el.period}
                                                </div>
                                            </Stack>
                                        </Card.Title>
                                        <Card.Text>
                                            <Stack gap={1}>
                                                {el.jobdesk.map((job, id) => {
                                                    return (
                                                        <div key={id}>
                                                            <Check /> {job}
                                                        </div>
                                                    );
                                                })}
                                            </Stack>
                                            <Stack
                                                direction="horizontal"
                                                gap={1}
                                                style={{ marginTop: 6 }}
                                            >
                                                {el.skill.map((skill, id) => {
                                                    return (
                                                        <div key={id}>
                                                            <Badge
                                                                pill
                                                                className="badge-outline"
                                                                bg="dark"
                                                                style={{
                                                                    color: '#feece2',
                                                                    border: 'solid 1px #feece2',
                                                                }}
                                                            >
                                                                {skill}
                                                            </Badge>
                                                        </div>
                                                    );
                                                })}
                                            </Stack>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                <Row style={{ marginTop: 30 }}>
                    <Stack className='p-organization' direction="horizontal" gap={2}>
                        <div className="org-icon">
                            <PeopleFill size={40} color="#feece2" />
                        </div>
                        <h4>ORGANIZATION</h4>
                    </Stack>
                    {organization.map((el, id) => {
                        return (
                            <Col sm={12} md={6} lg={3} key={id}>
                                <Card className="organization d-flex justify-content-center">
                                    <Card.Header>
                                        <Stack direction="horizontal">
                                            <div className="p-1">{el.name}</div>
                                            <div className="p-2 ms-auto">
                                                {el.icon} {el.place}
                                            </div>
                                        </Stack>
                                    </Card.Header>
                                    <Card.Body style={{ paddingTop: 0 }}>
                                        <Card.Title>
                                            <Stack direction='horizontal'>
                                                <div className="p-1">{el.position}</div>
                                                <div className="p-2 ms-auto">
                                                    <h6>
                                                        <ClockFill /> {el.period}
                                                    </h6>
                                                </div>
                                            </Stack>
                                        </Card.Title>
                                        <Card.Text>
                                            <Stack gap={1}>
                                                {el.jobdesk.map((job, id) => {
                                                    return (
                                                        <div key={id}>
                                                            <Check /> {job}
                                                        </div>
                                                    );
                                                })}
                                            </Stack>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Experience;
