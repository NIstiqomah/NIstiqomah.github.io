import { Button, Card, Carousel, Col, Container, Row, Stack } from 'react-bootstrap';
import './styles/Achievement.scss';
import TrackVisibility from 'react-on-screen';
import { ArrowLeft, CalendarEvent, ClockFill, Link45deg } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const Achievement = () => {
    const navigate = useNavigate();
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const listCertificate = [
        {
            path: '../src/assets/sertif-udemy-katalon.png',
            period: '2023',
            title: 'Udemy: Katalon Studio Beginners – Hands on Training',
            text: '17.5 hours training with the main material Katalon Studio for QA automation',
        },
        {
            path: '../src/assets/sertif-fga-react.png',
            period: '2022',
            title: 'FGA: React Js for Web Development',
            text: '1 month training with the main material Git, Javascript, and React JS with 2 main projects',
        },
        {
            path: '../src/assets/sertif-vsga-webdev.png',
            period: '2021',
            title: 'VSGA: Junior Web Developer',
            text: '90 hours of training with 15 main materials and 1 final project',
        },
        {
            path: '../src/assets/sertif-fga-personal-branding.png',
            period: '2021',
            title: 'Personal Branding Training',
            text: '8 hours post training organized by Digital Talent Scholarship for personal branding skills that the company pays attention to',
        },
        {
            path: '../src/assets/sertif-fga-english.png',
            period: '2021',
            title: 'English Training',
            text: '12 hours post training organized by Digital Talent Scholarship for English skill preparation',
        },
        {
            path: '../src/assets/sertif-fga-interpersonal.png',
            period: '2021',
            title: 'Interpersonal Skill Training',
            text: '10 hours post-training organized by Digital Talent Scholarship for interpersonal skills needed at work',
        },
        {
            path: '../src/assets/sertif-pd-android-bootcamp.png',
            period: '2021',
            title: 'Android Developer Short-Bootcamp',
            text: '2 days short-bootcamp Android developer organized by Peduli Digital',
        },
        {
            path: '../src/assets/sertif-iot.png',
            period: '2021',
            title: 'Design and Implementation IoT Application Information System',
            text: '1 month training organized by Andromedia Group to learn IoT design and implementation, with a final project using Cisco Packet Tracer',
        },
        {
            path: '../src/assets/sertif-lmt.png',
            period: '2019',
            title: 'Life Manajement Training',
            text: '54 hours of training on time management, organization and learning how to lead and work with new people',
        },
    ];

    const slides = (acc, cur, index) => {
        const group = Math.floor(index / 1);
        if (!acc[group]) {
            acc[group] = [];
        }
        acc[group].push(cur);
        return acc;
    };

    return (
        <section className="achievement" id="achievement">
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
                <h2 className="title">AWARD</h2>
                <Row>
                    <Col xs={12} md={4} xl={4}>
                        <div className="award-img">
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible
                                                ? 'animate__animated animate__bounceInUp animate__delay-2s'
                                                : ''
                                        }
                                    >
                                        <img src="../src/assets/award.png" alt="award" />
                                    </div>
                                )}
                            </TrackVisibility>
                        </div>
                    </Col>
                    <Col xs={12} md={8} xl={8} style={{ marginTop: 16 }}>
                        <Stack gap={2}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <>
                                        <Card
                                            className={
                                                isVisible
                                                    ? 'animate__animated animate__slideInLeft'
                                                    : ''
                                            }
                                        >
                                            <Card.Body>
                                                <Card.Title>
                                                    <Stack direction="horizontal">
                                                        <div className="p-1">
                                                            Third Winner of English Olympiad
                                                        </div>
                                                        <div className="p-2 ms-auto">
                                                            <ClockFill /> 2016
                                                        </div>
                                                    </Stack>
                                                </Card.Title>
                                                <Card.Text style={{ paddingLeft: 4 }}>
                                                    English Olympiad for Madrasah Science
                                                    Competition in Gresik Regency
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card
                                            className={
                                                isVisible
                                                    ? 'animate__animated animate__slideInLeft animate__slow'
                                                    : ''
                                            }
                                        >
                                            <Card.Body>
                                                <Card.Title>
                                                    <Stack direction="horizontal">
                                                        <div className="p-1">
                                                            Semifinalist of Chemistry Olympiad
                                                        </div>
                                                        <div className="p-2 ms-auto">
                                                            <ClockFill /> 2017
                                                        </div>
                                                    </Stack>
                                                </Card.Title>
                                                <Card.Text style={{ paddingLeft: 4 }}>
                                                    Chemistry Olympiad for Madrasah Science
                                                    Competition in East Java Province
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card
                                            className={
                                                isVisible
                                                    ? 'animate__animated animate__slideInLeft animate__slower'
                                                    : ''
                                            }
                                        >
                                            <Card.Body>
                                                <Card.Title>
                                                    <Stack direction="horizontal">
                                                        <div className="p-1">
                                                            First Winner of KMIPN
                                                        </div>
                                                        <div className="p-2 ms-auto">
                                                            <ClockFill /> 2022
                                                        </div>
                                                    </Stack>
                                                </Card.Title>
                                                <Card.Text style={{ paddingLeft: 4 }}>
                                                    KMIPN (Kompetisi Mahasiswa Informatika
                                                    Politeknik Nasional) in the E-Government
                                                    division
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </>
                                )}
                            </TrackVisibility>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h2>TRAINING & CERTIFICATION</h2>
                <Carousel interval={1500}>
                    {numbers.reduce(slides, []).map((item, index) => (
                        <Carousel.Item key={index}>
                            <div className="ccontent d-flex justify-content-center">
                                {item.map((el, index) => {
                                    return (
                                        <Card className="ccard" key={index}>
                                            <Card.Img
                                                className="sertif-img mx-auto d-block"
                                                variant="top"
                                                src={listCertificate[el].path}
                                            ></Card.Img>
                                            <Card.Body>
                                                <Card.Title>
                                                    <Stack direction="horizontal">
                                                        <div className="p-1">
                                                            {listCertificate[el].title}
                                                        </div>
                                                        <div className="p-2 ms-auto">
                                                            <ClockFill />
                                                            {listCertificate[el].period}
                                                        </div>
                                                    </Stack>
                                                </Card.Title>
                                                <Card.Text style={{ marginLeft: 3 }}>
                                                    {listCertificate[el].text}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    );
                                })}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
            <Container>
                <h2>PUBLICATION</h2>
                <Card className="publication-card mx-auto d-block">
                    <Row>
                        <Col sm={12} md={4}>
                            <Card.Img
                                className="psertif-img mx-auto d-block"
                                src="../src/assets/sertif-isriti.png"
                            ></Card.Img>
                        </Col>
                        <Col sm={12} md={8}>
                            <Card.Body>
                                <Card.Title>
                                    Network Quality Prediction with QoS and QoE Data for Digital
                                    Television Using WebGIS
                                </Card.Title>
                                <Card.Text>
                                    <Stack>
                                        <div className="p-1">
                                            International Seminar on Research of Information
                                            Technology and Intelligent Systems (ISRITI)
                                        </div>
                                        <div className="p-2">
                                            <CalendarEvent /> December 2022
                                        </div>
                                        <div className="p-3">
                                            <Link45deg />{' '}
                                            <a href="https://ieeexplore.ieee.org/abstract/document/10052917">
                                                https://ieeexplore.ieee.org/abstract/document/10052917
                                            </a>
                                        </div>
                                    </Stack>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </section>
    );
};

export default Achievement;
