import NextLink from 'next/link'
import { useEffect, useRef } from 'react'
import { Link, Container, Heading, Box, Button, List, ListItem, useColorModeValue, chakra } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import { init } from 'ityped'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Software Engineer", "React Developer", "Front-End Developer", "Full-Stack Developer"]
        })
    }, []);

    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                >
                    Hello, I&apos;m a Full-Stack Developer based in Toronto!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Amritpal Singh
                        </Heading>
                        <p><span ref={textRef}></span></p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center"                    >
                        <Box borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" w="100px" h="100px" display="inline-block" borderRadius="full" overflow='hidden'                        >
                            <ProfileImage src="/images/amrit.jpg" alt="Profile image" borderRadius='full' width="100%" height="100%" />
                        </Box>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Amritpal is a full-stack developer with 6+ years in the industry. Experienced in developing web applications using React, Redux, JavaScript, Node.js, and Express.js. Experienced in working with Agile development methodologies. Familiar with using and designing REST APIs. Familiar with user experience design tools like Adobe XD, Figma.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works" scroll={false}>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1992</BioYear>
                        Born in Amritsar, India.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Completed the Bachelor&apos;s Program in Information Technology at Punjab Technical University, India.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Worked at Wipro! India.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Worked at Conduent! India.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Completed the Graduate Certificate Program in Computer Applications Development from Conestoga College, Canada.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/singh-amritpal" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoGithub />}
                                >
                                    @singh-amritpal
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/craftzdog" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoLinkedin />}
                                >
                                    @singh-amritpal92
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://instagram.com/singh.amritpal92" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoInstagram />}
                                >
                                    @singh.amritpal92
                                </Button>
                            </Link>
                        </ListItem>
                    </List>

                    <Box align="center" my={4}>
                        <NextLink href="/posts" scroll={false}>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Popular posts
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home
export { getServerSideProps } from '../components/chakra'
