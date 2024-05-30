import { Badge, Button, Card, Col, Container, Row, Stack } from 'react-bootstrap';
import './styles/Project.scss';
import TrackVisibility from 'react-on-screen';
import { ArrowLeft, ClockFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const Project = () => {
    const navigate = useNavigate();
    const content = [
        {
            title: 'SIKS-NG',
            text: 'Information system that supports the processing of Integrated Social Welfare Data',
            period: '2022- Present',
            use: ['Typescript', 'React Js', 'Material UI', 'PHP', 'Laravel'],
        },
        {
            title: 'SIKS-Akses',
            text: 'Website for SIKS-NG management access',
            period: 'In Progress',
            use: ['Typescript', 'React Js', 'Material UI', 'C#'],
        },
        {
            title: 'Digta (Digital Television Analysis)',
            text: 'Website designed to forecast the quality of digital television broadcasts using data analysis of QoS and QoE',
            period: '2022',
            use: ['Javascript', 'Leaflet Js', 'Bootstrap', 'PHP', 'Codeigniter', 'Phyton'],
        },
        {
            title: 'Website for Cellular Media Quality Analysis',
            text: 'Website designed to forecast the quality of digital mobile media by analyzing both QoS and QoE data',
            period: '2022',
            use: ['Javascript', 'Leaflet Js', 'Bootstrap', 'PHP', 'Codeigniter', 'Phyton'],
        },
        {
            title: 'Bina Desa Educational Project',
            text: 'website intended for reading and downloading elementary school textbooks, dictionaries, and storybooks',
            period: '2021',
            use: ['Javascript', 'PHP', 'Bootstrap'],
        },
        {
            title: 'BookBuk',
            text: 'Website to read, download and share novels for free',
            period: '2019',
            use: ['Javascript', 'PHP', 'Bootstrap'],
        },
        {
            title: 'Truth or Dare game',
            text: 'Truth or Dare mini game using shell programming',
            period: '2019',
            use: ['Shell Script'],
        },
    ];

    return (
        <section className="project" id="project">
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
                <h2>PROJECT</h2>
                <Row>
                    <Col sm={12} md={9}>
                        {content.map((el, id) => {
                            return (
                                <Card className="projects d-flex justify-content-center" key={id}>
                                    <Card.Body style={{ paddingTop: 0 }}>
                                        <Card.Title>
                                            <Stack direction="horizontal">
                                                <div className="p-1">{el.title}</div>
                                                <div className="p-2 ms-auto">
                                                    <h6>
                                                        <ClockFill /> {el.period}
                                                    </h6>
                                                </div>
                                            </Stack>
                                        </Card.Title>
                                        <Card.Text>
                                            {el.text}
                                            <Stack direction="horizontal" gap={1}>
                                                {el.use.map((use, id) => {
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
                                                                {use}
                                                            </Badge>
                                                        </div>
                                                    );
                                                })}
                                            </Stack>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            );
                        })}
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="project-img">
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible ? 'animate__animated animate__backInDown' : ''
                                        }
                                    >
                                        <img src="/girl-cat.png" alt="girl" />
                                    </div>
                                )}
                            </TrackVisibility>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Project;
