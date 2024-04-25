import './styles/Home.scss';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { Container, Col, Row, Button, Stack } from 'react-bootstrap';
import { EnvelopeAt, Linkedin, Whatsapp } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const jobs = ['WEB DEVELOPER', 'WEB DESIGNER', 'QUALITY ASSURANCE'];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const navigate = useNavigate();
    const btn = ['Experience', 'Achievement', 'Project'];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    const tick = () => {
        let i = loopNum % jobs.length;
        let fullText = jobs[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta((prev) => prev / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(2000);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Stack direction="horizontal" gap={3} style={{ marginTop: 30 }}>
                        <div className="p-1 ms-auto">
                            <h6>Let’s Connect</h6>
                        </div>
                        <div className="p-1">
                            <a href="https://www.linkedin.com/in/nurul-istiqomah-33a0b51a6/">
                                <Linkedin style={{ color: '#FFCAD4' }} />
                            </a>
                        </div>
                        <div className="p-1">
                            <a href="mailto:istiqomahh.nurull@gmail.com">
                                <EnvelopeAt style={{ color: '#FFCAD4' }} />
                            </a>
                        </div>
                        <div className="p-1">
                            <a href="https://wa.me/085211163784">
                                <Whatsapp style={{ color: '#FFCAD4' }} />
                            </a>
                        </div>
                    </Stack>
                </Row>
                <Row>
                    <Col md={12} xl={7}>
                        <Stack>
                            <div className="summary">
                                <h3>
                                    HELLO! I’M <br /> NURUL ISTIQOMAH
                                    <br />
                                </h3>
                                <span
                                    className="txt-rotate"
                                    dataperiod="1000"
                                    data-rotate='["WEB DEVELOPER", "WEB DESIGNER", "QUALITY ASSURANCE"]'
                                >
                                    <span className="wrap">{text}</span>
                                </span>
                                <p>
                                    With more than a year of hands-on experience in developing
                                    scalable and responsive web applications using modern software
                                    design techniques and Agile Methodology. <br /> Have a
                                    significant experience with various projects, processes, and
                                    technologies, which have shaped me into a responsible developer.{' '}
                                    <br /> Attention to detail and striving for perfection are
                                    extremely important to me. I am a quick learner and highly
                                    motivated to improve myself and get acquainted with new
                                    technologies or patterns.
                                </p>
                            </div>
                            <div className="d-flex justify-content-center">
                                {btn.map((el, id) => {
                                    return (
                                        <Button
                                            className="btn"
                                            key={id}
                                            onClick={() => {
                                                navigate(el.toLocaleLowerCase());
                                            }}
                                            style={{
                                                backgroundColor: '#ffcad4',
                                                border: 'none',
                                                color: '#1C123E',
                                            }}
                                        >
                                            <span>{el}</span>
                                        </Button>
                                    );
                                })}
                            </div>
                        </Stack>
                    </Col>
                    <Col md={12} xl={5}>
                        <div className="woman-img">
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible ? 'animate__animated animate__zoomIn' : ''
                                        }
                                    >
                                        <img
                                            src="/woman-dev2.png"
                                            alt="woman"
                                        />
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

export default Home;
