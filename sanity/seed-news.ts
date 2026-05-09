/**
 * Seeds all 19 news posts from the original WordPress site into Sanity.
 * Safe to re-run — uses createOrReplace.
 *
 *   npx tsx sanity/seed-news.ts
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset:   "production",
  apiVersion: "2024-01-01",
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
});

let keyCounter = 0;
function k() { return `k${++keyCounter}`; }

function blocks(...paragraphs: string[]) {
  return paragraphs.map((text) => ({
    _type: "block", _key: k(), style: "normal", markDefs: [],
    children: [{ _type: "span", _key: k(), text, marks: [] }],
  }));
}

function heading(text: string, style = "h2") {
  return { _type: "block", _key: k(), style, markDefs: [], children: [{ _type: "span", _key: k(), text, marks: [] }] };
}

function bulletList(items: string[]) {
  return items.map((text) => ({
    _type: "block", _key: k(), style: "normal",
    listItem: "bullet", level: 1, markDefs: [],
    children: [{ _type: "span", _key: k(), text, marks: [] }],
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const posts: any[] = [
  {
    _id: "news-christmas-carol-2025",
    _type: "newsPost",
    title: "Singing Together at Christmas, Accessible Carol Services Across Suffolk",
    slug: { _type: "slug", current: "christmas-carol-services-suffolk-2025" },
    publishedAt: "2025-12-19T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Community", "Singing for Lung Health", "Music & Dementia"],
    excerpt: "December has been a wonderful, busy month for Swell Music CIC, with accessible carol services, festive community singing, and seasonal celebrations right across Suffolk.",
    body: blocks(
      "December has been a wonderful, busy month for Swell Music CIC, with accessible carol services, festive community singing, and seasonal celebrations right across Suffolk. From Halesworth to Oulton Broad, from the Co-Op community room to a beautiful church full of Christmas trees, it has been a season to remember.",
      "December has been a truly magical month. We had a wonderful time at the Halesworth Accessible Carol Service alongside our friends from Mencap Halesworth and Halesworth Dementia Carers' Fund. Everyone sang beautifully, and the church looked incredible with all the Christmas trees for the Christmas Tree Festival. We absolutely loved the popcorn tree. It is always such a privilege to be part of an event like this, where the focus is on making sure everyone can participate fully and feel genuinely included.",
      "We also joined the Accessible Carol Service at St Mark's Church in Oulton Broad, alongside a wonderful group of organisations including Topcats Charity, Pathways Care Farm, and Lowestoft Signing Choir. The room was full of warmth, voices, and community spirit, and we left feeling so grateful for every partnership we have built across this region. Earlier in the month, Santa himself paid a visit to our community singing session at Halesworth Co-Op, which caused quite a stir and brought a lot of joy to everyone there. And our Reydon Singing for Lung Health group had the most joyful festive lunch after their December session, with some very fine singing and a lot of laughter.",
      "One of the most rewarding things about this time of year is seeing the genuine friendships that have formed amongst our participants. There is something about gathering together to sing at Christmas that brings out the best in everyone, and this year was no different. Thank you to every venue, every partner organisation, and every single person who came and sang with us this December. You make this work so meaningful, and we cannot wait to see you all again in the new year.",
    ),
  },
  {
    _id: "news-dream-come-true-2025",
    _type: "newsPost",
    title: "A Dream Come True, How Music Brought One of Our Participants Back to Life",
    slug: { _type: "slug", current: "participant-story-music-dream" },
    publishedAt: "2025-12-06T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Music for Wellbeing"],
    excerpt: "When we first met one of our participants, he told us his dream was to play music with other people. Watching that dream become reality has been one of the most moving experiences of our time running Swell Music CIC.",
    body: blocks(
      "When we first met one of our participants, he told us his dream was to play music with other people. Watching that dream become reality has been one of the most moving experiences of our time running Swell Music CIC.",
      "There are moments in this work that stay with you, and this is one of them. When we first met one of our lovely participants at the Friday Music for Wellbeing group at The Seagull Theatre, he told us very quietly that his dream was to play music with other people. He was not sure he could. He was not sure people would want him there. But he came through the door, and he kept coming back, and something very beautiful began to happen.",
      "Over the weeks and months that followed, we watched him grow in confidence, form friendships, pick up an instrument, and find his place in a community of musicians. By September 2025, he was not just coming to our sessions, he was turning up at the Wired Sounds Festival at The Seagull Theatre to support the young emerging artists who had come through our programme. Seeing him there, in that audience, cheering on those brilliant young musicians, was a truly magical moment. One of our long-standing group members put it perfectly: he is amazing, and we are so proud of him.",
      "Stories like this are why we do what we do. Music for Wellbeing is not just about learning songs or keeping busy. It is about creating the kind of safe, warm, welcoming space where people feel seen, valued and free to be themselves. Our Friday group at The Seagull Theatre runs every week from 1.30pm to 3pm, it is free, and everyone is welcome. If you have a dream about making music with other people, come and find us. We will be very glad you did.",
    ),
  },
  {
    _id: "news-bbc-look-east-2025",
    _type: "newsPost",
    title: "From Our Sessions to BBC Look East, The Story of Our BBC Feature",
    slug: { _type: "slug", current: "bbc-look-east-singing-for-lung-health" },
    publishedAt: "2025-12-03T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Singing for Lung Health", "Community"],
    excerpt: "In December 2025 the BBC came to film our Singing for Lung Health sessions for BBC Look East, and we could not have been more proud.",
    body: blocks(
      "In December 2025 the BBC came to film our Singing for Lung Health sessions for BBC Look East, and we could not have been more proud. The camera crew spent time with us and with our incredible participants, and that evening our work was broadcast to viewers right across the region. BBC Suffolk also picked up the story, describing what we do beautifully: a choir made up of people with lung conditions using singing to strengthen their breathing muscles. To hear our work described that way on national media meant the world to us.",
      "The response was wonderful. People from as far as Wales got in touch to say how much the feature resonated with them. One person commented that these groups are vital for people with lung conditions, and shared how sad it was that a similar group in their area had closed during Covid and never reopened. That comment stayed with me, because it is a reminder of just how important this work is and why we keep going. The BBC News website then published a full article, Singalong in Suffolk boosts lung health and helps a good cause, which brought even more people to our door.",
      "Behind the scenes, the filming day was a joy. Our participants were brilliant, natural and warm in front of the camera, and the crew were lovely to work with. It was the kind of day that reminds you why you do what you do. We are so grateful to the BBC for giving our work this platform, and to Asthma and Lung UK for their ongoing partnership, which made all of this possible. If you have not seen the feature yet, search for Swell Music CIC on the BBC website, or come along to one of our sessions and see what all the fuss is about.",
    ),
  },
  {
    _id: "news-open-access-neurodivergent-2025",
    _type: "newsPost",
    title: "Open to All, Our Music Group for Neurodivergent Adults at The Seagull Theatre",
    slug: { _type: "slug", current: "open-access-music-neurodivergent-adults" },
    publishedAt: "2025-09-16T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Wired Sounds"],
    excerpt: "We are so excited to be running our Open Access music-making group for neurodivergent adults at The Seagull Theatre in Lowestoft.",
    body: blocks(
      "We are so excited to be running our Open Access music-making group for neurodivergent adults at The Seagull Theatre in Lowestoft. It is a relaxed, welcoming, wellbeing-based session on alternate Wednesdays, there is no need to book, no previous musical experience required, and you are welcome to bring your instrument and your voice.",
      "We are absolutely delighted to be running our Open Access music-making group for neurodivergent adults at The Seagull Theatre in Lowestoft, and we are equally thrilled to have a Gorleston version of the group running at Shrublands Community Trust on alternate Wednesday mornings from 10am to 11.30am. These sessions are a wellbeing-based group for exploring music in a safe, relaxed, pressure-free environment, and they are open to absolutely everyone. No need to book, no previous musical experience required, just come along and bring your instrument and your voice if you have them.",
      "The Lowestoft sessions run on alternate Wednesday afternoons from 1.30pm to 3pm at The Seagull Theatre. The group is part of our wider Wired Sounds programme, which is supported by Arts Council England and Youth Music, and it was developed because we heard loud and clear that neurodivergent adults in our community wanted a music space that truly worked for them. A space with no performance pressure, no rigid structure, no expectation of any particular outcome. Just music, community, and the freedom to explore.",
      "We have been running these sessions since autumn 2024 and the response has been wonderful. In October 2024 BBC News ran an article about our work, Music group expands to help neurodiverse people across counties, which brought a lot of new faces through the door and meant a great deal to us. If you are a neurodivergent adult, or if you care for or support someone who is, we would love for you to come along. The kettle is always on and the welcome is always warm.",
    ),
  },
  {
    _id: "news-gorleston-lung-health-2025",
    _type: "newsPost",
    title: "New in Gorleston, Singing for Lung Health Comes to the Pavilion Theatre",
    slug: { _type: "slug", current: "singing-for-lung-health-gorleston" },
    publishedAt: "2025-09-15T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Singing for Lung Health"],
    excerpt: "We are so excited to share that Singing for Lung Health has come to Gorleston, with a brand new group launching at the wonderful Pavilion Theatre and Bandstand.",
    body: blocks(
      "We are so excited to share that Singing for Lung Health has come to Gorleston, with a brand new group launching at the wonderful Pavilion Theatre and Bandstand. If you are living with a lung condition or just looking for a friendly, free and fun way to look after your breathing, come and join us.",
      "We are absolutely thrilled to announce that Singing for Lung Health has arrived in Gorleston. We have launched a brand new group at the Pavilion Theatre and Bandstand, a wonderful community venue, and we could not be more excited about the journey ahead. This is something we have wanted to do for a long time, and it would not have been possible without the warmth and enthusiasm of the team at the Pavilion, who have welcomed us with open arms.",
      "The sessions are completely free to attend, they are friendly, relaxed and inclusive, and you do not need any musical experience or any singing ability whatsoever. Every session is led by a trained, Asthma and Lung UK-accredited practitioner and is designed to help people living with lung conditions manage their breathlessness through a mix of singing, breathing exercises and relaxation techniques. We also run sessions at Shrublands Community Trust in Gorleston on alternate Wednesday mornings from 10am to 11.30am, so there are now more opportunities than ever to come and join us on the south Norfolk coast.",
      "If you or someone you know is living with a lung condition, or if you simply want to try something new in a warm and welcoming space, please do come along. Refreshments are provided, there is no need to book, and we promise you will leave feeling better than when you arrived. We would love to see you there.",
    ),
  },
  {
    _id: "news-breathe-and-sing-2025",
    _type: "newsPost",
    title: "Breathe and Sing With Us, How Swell Music CIC Is Using Song to Transform Lung Health in Suffolk",
    slug: { _type: "slug", current: "breathe-and-sing-with-us" },
    publishedAt: "2025-09-08T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Singing for Lung Health"],
    excerpt: "At Swell Music CIC we run free, friendly Singing for Lung Health sessions across Suffolk and Norfolk, working in partnership with Asthma and Lung UK.",
    body: blocks(
      "At Swell Music CIC, we believe in the power of singing to change lives, and nowhere is that more clear than in our Singing for Lung Health programme. We run free, friendly sessions across Suffolk and Norfolk in partnership with Asthma and Lung UK, and every session is led by a trained, Asthma and Lung UK-accredited practitioner. Our aim is simple: to help people living with lung health conditions learn how to manage their breathlessness through singing, relaxation and breathing exercises. You do not need any musical experience, and you do not need to book. Just turn up, and we will have the kettle on.",
      "We currently run weekly sessions at Reydon Sports and Community Centre on Tuesday mornings from 10am to 11.30am, and we are so excited to have launched a brand new group at the Pavilion Theatre and Bandstand in Gorleston too. We have also run pop-up sessions at First Light Lowestoft's Battery of Ideas on London Road North, as part of our wonderful ongoing partnership with The Seagull Theatre. Each session is a mix of activities designed to help you relax, breathe deeply, and have fun singing together. There is always a warm welcome, a friendly face, and refreshments provided.",
      "Medical research shows that making music in a supportive, safe, social setting can greatly improve your physical and mental wellbeing, and we see that every single week in the faces of the people who come through the door. It is not just about the breathing exercises, though those really do help. It is about the friendships that form, the laughter, the cup of tea afterwards, and the feeling of belonging to something that genuinely cares about you. As we always say: breathe and sing with us. Everyone is welcome.",
      "Our Reydon group was commissioned by the Sole Bay Care Fund, and we are so grateful for their support in making these sessions possible. If you would like to find out more or come along, please visit swellmusic.org.uk or get in touch via our Facebook page. We would love to see you there.",
    ),
  },
  {
    _id: "news-wired-sounds-festival-2025",
    _type: "newsPost",
    title: "Wired Sounds Festival 2025, A Free Weekend of Emerging Music at The Seagull Theatre",
    slug: { _type: "slug", current: "wired-sounds-festival-2025" },
    publishedAt: "2025-09-06T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Wired Sounds"],
    excerpt: "Two days, twelve incredible emerging artists, a packed and joyful Seagull Theatre, and more talent from this region than we could have ever dreamed of.",
    body: blocks(
      "WOW. What an incredible time we had at Wired Sounds Festival 2025. Two full days of free, live music at The Seagull Theatre in Lowestoft, featuring twelve of the most exciting emerging artists from our region, and the atmosphere was just electric. Saturday's lineup featured Chloe Lupton, Kitty-May, Juliet, Sophie the Great, Retro Firefly and Emily Deal, and Sunday brought Eve's Delight, Sub Liminal, Tiah Jean, Naima, Echo Located and Ruby Sue. Every single one of them was extraordinary.",
      "Wired Sounds is a collaboration between Swell Music CIC, The Seagull Theatre and Youth Music, supported by Arts Council England, and it is one of the projects we are most proud of. The festival is completely free to attend, fully accessible, and exists to give young and emerging artists from Norfolk and Suffolk a proper stage and a proper audience. BBC Music Introducing in Norfolk and Suffolk came on board to help us spread the word ahead of the weekend, and it was wonderful to see Kitty-May and Eve's Delight featured in their coverage.",
      "There was one moment from the weekend that I will carry with me for a long time. One of our Music for Wellbeing participants, who came along to support the young artists, was right there in the audience, cheering them on. Seeing the two sides of our world — our wellbeing community and our youth music programme — come together in that room was genuinely moving. Thank you to every artist who performed, every audience member who came, and everyone who has supported Wired Sounds from the beginning. We cannot wait to do it all again.",
    ),
  },
  {
    _id: "news-national-literacy-trust-2025",
    _type: "newsPost",
    title: "Musical Storytelling With Families, Our Project With the National Literacy Trust in Suffolk",
    slug: { _type: "slug", current: "national-literacy-trust-suffolk-music-project" },
    publishedAt: "2025-03-25T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Partnerships", "Community"],
    excerpt: "We loved being part of the National Literacy Trust in Suffolk's musical storytelling project at Phoenix St Peters Academy, playing nursery rhymes, lullabies and music with families.",
    body: blocks(
      "We absolutely loved being part of this project working with the fantastic team at the National Literacy Trust in Suffolk. It was so much fun, playing nursery rhymes, lullabies and music together with families in such a warm, safe, welcoming space. The sessions took place at Phoenix St Peters Academy, and the National Literacy Trust team did a wonderful job of creating an environment where everyone, from the youngest children to the adults with them, could relax, engage and enjoy.",
      "There is something particularly magical about making music with very young children and their families. The combination of familiar songs, simple instruments and the physical act of singing together creates a kind of joy that is very hard to replicate any other way. We saw babies responding to the rhythm, toddlers joining in with words they half knew, and adults rediscovering the pleasure of nursery rhymes they had not sung since their own childhoods. It is gentle, powerful, and genuinely good for everyone in the room.",
      "Our final session marked the end of a really lovely run of work together, and we left feeling grateful for the partnership and excited about what collaborations like this one can do for communities. Bringing music and literacy together, reaching families who might not otherwise have access to either, feels very much in line with everything we care about at Swell Music CIC. A huge thank you to the National Literacy Trust in Suffolk for having us, and to every family who came and sang with us. We hope to work together again soon.",
    ),
  },
  {
    _id: "news-women-who-sing-2025",
    _type: "newsPost",
    title: "Women Who Sing, Celebrating the Community at the Heart of Swell Music CIC",
    slug: { _type: "slug", current: "women-who-sing-international-womens-day" },
    publishedAt: "2025-03-08T12:00:00Z",
    author: "Swell Music CIC",
    categories: ["Community"],
    excerpt: "On International Women's Day we want to celebrate the incredible women who are at the heart of everything we do at Swell Music CIC.",
    body: blocks(
      "Today, on International Women's Day, I want to take a moment to celebrate the friendship that we have found working together, and to honour all the amazing women who take part in our activities. Our community is built on the courage and warmth of the women who walk through our doors, and it would not be what it is without every single one of them.",
      "That means the women who are living with chronic and challenging health conditions, who show up week after week with such grace and determination. It means the women who are carers, giving so much of themselves to others and who find in our sessions a rare and precious space to simply be themselves. It means the women who are bereaved, who have found comfort and community in singing together. And it absolutely means the talented, neurodivergent young female artists we work with through our Wired Sounds programme, whose creativity and courage never cease to amaze us.",
      "Running Swell Music CIC has taught me so much about what women are capable of when they are given a safe, supportive space to express themselves. The friendships that have grown through our sessions are real and lasting, and they make me incredibly proud. Happy International Women's Day to every woman who has ever sung with us, supported us, or cheered us on. You bring us the joy, and we are so grateful for every one of you.",
    ),
  },
  {
    _id: "news-iwday-founders-2025",
    _type: "newsPost",
    title: "Celebrating International Women's Day, The Women Behind Swell Music CIC",
    slug: { _type: "slug", current: "international-womens-day-founders-swell" },
    publishedAt: "2025-03-08T08:00:00Z",
    author: "Swell Music CIC",
    categories: ["Community", "Our Story"],
    excerpt: "On International Women's Day, we want to celebrate the friendship at the heart of Swell Music CIC and reflect on why we started.",
    body: blocks(
      "Happy International Women's Day. Today we want to celebrate the friendship that we have found in working together, and to reflect on what it means to run an organisation like Swell Music CIC. We started this because we believed that music could change lives, and every week the women who walk through our doors prove us right. This day feels like a good moment to say thank you to all of them, and to each other.",
      "The community we have built at Swell Music CIC is, at its heart, a community of women. Women who are managing their health with courage and grace. Women who give everything to caring for others and who deserve a space that cares for them in return. Women who have experienced loss and who find in singing a way to hold that grief alongside joy. And the extraordinary young women who come through our Wired Sounds programme, who are blazing their own paths with such creativity and talent. Every one of them inspires us deeply.",
      "We did not always know that this is what we would build. But looking back, we would not change a single thing. The friendships, the music, the tears and the laughter, the moments that catch you off guard with how beautiful they are, it has all been worth it. We are so proud of what Swell Music CIC has become, and we are so grateful to every woman who has been part of the journey. To our community: you bring us the joy, and we are so glad you are here.",
    ),
  },
  {
    _id: "news-taking-the-spotlight-2025",
    _type: "newsPost",
    title: "Taking the Spotlight, A Moment of Courage at the Friday Music for Wellbeing Group",
    slug: { _type: "slug", current: "taking-the-spotlight-music-for-wellbeing" },
    publishedAt: "2025-03-06T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Music for Wellbeing"],
    excerpt: "This week at the Friday Music for Wellbeing group, one of our wonderful participants did something that took everyone's breath away.",
    body: blocks(
      "This week at the Friday Music for Wellbeing group at The Seagull Theatre, something happened that genuinely moved everyone in the room. One of our wonderful participants, who has been coming along to the group for a while now, felt confident enough today to step forward and take the spotlight. They played a solo, right there in front of everyone, and it was beautiful.",
      "The Friday group is a free, open session that runs every week from 1.30pm to 3pm, and it welcomes absolutely everyone regardless of musical experience or ability. But what makes it truly special is the atmosphere that has grown there over time. It is a space where people feel safe enough to take risks, to try things they have never tried before, to be seen. Watching someone step into their own confidence like that, with the full warmth and support of the group behind them, is one of those moments you simply cannot plan for. It just happens, when you create the right conditions.",
      "We talk a lot about music for wellbeing as something that supports mental and physical health, and it absolutely does. But moments like today remind us that it is also about something deeper than that. It is about finding your voice, in every sense of the word. If you have been curious about coming along to the Friday group at The Seagull Theatre in Lowestoft, please do. It is free, it is friendly, no experience is needed, and we would love to have you with us.",
    ),
  },
  {
    _id: "news-lowestoft-town-of-culture-2025",
    _type: "newsPost",
    title: "We Back the Bid, Swell Music CIC and Lowestoft's Town of Culture 2028 Campaign",
    slug: { _type: "slug", current: "lowestoft-town-of-culture-2028" },
    publishedAt: "2025-02-10T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Community"],
    excerpt: "We are so excited for Lowestoft and we wholeheartedly back the bid for Town of Culture 2028.",
    body: blocks(
      "We are so excited for Lowestoft and we definitely back the bid for Town of Culture 2028. This town has given us so much as an organisation. It is where so many of our participants come from, where we have built our partnerships, where we have watched people grow in confidence, make friends, and find their voices. Lowestoft deserves to be recognised as the remarkable cultural hub that it already is, and a Town of Culture designation would be an extraordinary opportunity to build on that.",
      "Culture and health are not separate things. At Swell Music CIC we see every single week how access to music, creativity and community arts changes lives. It reduces isolation, supports mental health, helps people manage physical conditions, and builds the kind of belonging that no prescription can replicate. A town that invests in culture is a town that invests in its people, and Lowestoft has always done that. From The Seagull Theatre to First Light Festival, from the Lowestoft Town Hall Project to the incredible community organisations we work alongside every day, this town is already full of cultural life and ambition.",
      "We are proud to add our voice to the #WeLoveLowestoft campaign and to say clearly: we believe in this town, we believe in this bid, and we will do everything we can to support it. If you want to know more about the Town of Culture 2028 bid, please do look it up and show your support. Together we can show the world what Lowestoft is made of.",
    ),
  },
  {
    _id: "news-big-christmas-singalong-2025",
    _type: "newsPost",
    title: "The Big Christmas Singalong, How We Raised £283.90 for Asthma and Lung UK",
    slug: { _type: "slug", current: "big-christmas-singalong-asthma-lung-uk" },
    publishedAt: "2025-02-01T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Singing for Lung Health", "Fundraising"],
    excerpt: "We are so proud to share that our Big Christmas Singalong for Asthma and Lung UK raised £283.90 for the charity.",
    body: blocks(
      "Back in December 2024 I had the joy of facilitating Asthma and Lung UK's online Big Christmas Singalong as part of their festive fundraiser, and I am so thrilled to share that thanks to the generosity of everyone who donated, we raised £283.90 for this incredible charity. Asthma and Lung UK is the only UK charity that fights for everyone's right to breathe, and every penny raised goes towards research, support and campaigning that makes a real difference to people living with lung conditions.",
      "The singalong itself was such a lovely event. I set up at home with song sheets on the table, my laptop open with the Asthma and Lung UK Big Christmas Singalong screen, and even my mum joined in from her own home, jingle bells in hand. Asthma and Lung UK were so kind afterwards, thanking everyone for a fantastic and fun-filled session. It was a reminder that you do not need to be in the same room to share the joy of singing together, and that music really does bring people closer, whatever the distance.",
      "The thank you certificate has been proudly displayed by the members of our Lowestoft groups, and seeing them hold it up together was one of those moments that makes everything worthwhile. Our fundraising was boosted by the wonderful support of people who had seen our Singing for Lung Health work featured on BBC Look East, and we are so grateful to everyone who gave so generously. If you would like to support Asthma and Lung UK or find out more about our Singing for Lung Health sessions, please do get in touch. Together we are transforming lung health, one song at a time.",
    ),
  },
  {
    _id: "news-friday-music-wellbeing-2025",
    _type: "newsPost",
    title: "Friday Music for Wellbeing, Why We Turn Up Every Week at The Seagull Theatre",
    slug: { _type: "slug", current: "friday-music-for-wellbeing-seagull-theatre" },
    publishedAt: "2025-01-26T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Music for Wellbeing"],
    excerpt: "Every Friday afternoon from 1.30pm to 3pm, something rather lovely happens at The Seagull Theatre in Lowestoft.",
    body: blocks(
      "It is always lots of fun making music with our lovely friends at The Seagull Theatre on Friday afternoons. We are there from 1.30pm to 3pm every single week for the Music for Wellbeing group, and it is free and everyone is welcome. There is always a cuppa, a chat, and a warm welcome waiting for you when you come through the door. One of our wonderful regulars took a beautiful photograph of the group recently that really captures what the Friday session is all about, and we are so grateful to her for sharing it.",
      "Going along to a music for wellbeing group is a great way to connect with likeminded people and make new friends. We have watched real friendships grow in that room over the months and years, the kind of friendships that extend beyond the session and into people's everyday lives. You do not need any musical experience to come along. You do not need to be able to sing. You just need to be willing to show up, and we will take care of the rest. We have had people play guitar solos, lead the group in songs they have brought from home, and even step into the spotlight for the very first time.",
      "The group has a life and energy all of its own, and it continues to surprise and delight us every week. If you have been thinking about coming along, this is your invitation. Fridays, 1.30pm to 3pm, The Seagull Theatre, Lowestoft. Free, friendly, and always full of music.",
    ),
  },
  {
    _id: "news-reydon-tuesday-2024",
    _type: "newsPost",
    title: "A Typical Tuesday in Reydon, Inside Our Weekly Singing for Lung Health Group",
    slug: { _type: "slug", current: "reydon-singing-for-lung-health-group" },
    publishedAt: "2024-12-17T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Singing for Lung Health"],
    excerpt: "Every Tuesday morning from 10am to 11.30am, a wonderful group of people gathers at Reydon Sports and Community Centre for our free Singing for Lung Health session.",
    body: blocks(
      "Every Tuesday morning I start the day with The Breakfast Calypso before heading off to our weekly Reydon Singing for Lung Health group at Reydon Sports and Community Centre, and honestly, it sets me up for the whole day. The group runs from 10am to 11.30am, it is completely free, and refreshments are always provided. It is one of the warmest, most joyful spaces I have ever had the privilege of walking into, and the voices in that room are just wonderful.",
      "The session is a mix of activities designed to help everyone relax, breathe deeply, and have fun singing together. We do breathing exercises, gentle movement, group singing and sometimes a bit of music-making too. It is led by a trained, Asthma and Lung UK-accredited practitioner, which means everything we do is grounded in what genuinely helps people with lung conditions. But honestly, it never feels like a medical session. It feels like a community. The friendships that have formed in that room are one of the most rewarding things about this whole project.",
      "The Reydon group was commissioned by the Sole Bay Care Fund, and we are so grateful for their support in making it possible to offer these sessions completely free of charge. Merry Christmas from all of us at the Reydon Singing for Lung Health group, and if you have been thinking about coming along in the new year, please do. There is always a warm welcome, a comfortable chair, and a cup of tea waiting for you.",
    ),
  },
  {
    _id: "news-town-hall-songwriting-2024",
    _type: "newsPost",
    title: "Writing Songs for Lowestoft, Our Songwriting Workshops for the Town Hall Project",
    slug: { _type: "slug", current: "lowestoft-town-hall-songwriting-workshops" },
    publishedAt: "2024-12-07T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Community", "Partnerships"],
    excerpt: "We have loved working with The Seagull Theatre as part of the Lowestoft Town Hall Project, running a short series of Saturday afternoon songwriting workshops.",
    body: blocks(
      "We have loved working with the brilliant team at The Seagull Theatre as part of the Lowestoft Town Hall Project, and this autumn we had the joy of running a short series of Saturday afternoon songwriting workshops as part of that collaboration. The workshops were facilitated by Helen, and brought together a lovely group of people who between them had so many stories, memories and ideas connected to Lowestoft and its history. What came out of those sessions was something really special.",
      "Songwriting workshops like these are something I find deeply rewarding, because they ask people to dig into what they know and feel and remember, and to find words and melodies for things that sometimes resist being spoken out loud. The Lowestoft Town Hall Project is about restoring and reimagining this incredible building at the heart of the town, and having the voices of community members woven into that process through original songs felt exactly right.",
      "Seeing members of our regular groups contributing to something with this kind of cultural and historical significance has been one of the highlights of our year. It is a reminder that the people who come through our doors are not just participants, they are artists, storytellers and community members with something genuinely important to say. We are so grateful to The Seagull Theatre for making this partnership possible, and to everyone who came along on those Saturday afternoons and brought their voices with them.",
    ),
  },
  {
    _id: "news-dear-dot-2024",
    _type: "newsPost",
    title: "Dear Dot, Music, Memory and the People We Carry With Us",
    slug: { _type: "slug", current: "dear-dot-music-memory" },
    publishedAt: "2024-11-05T12:00:00Z",
    author: "Swell Music CIC",
    categories: ["Music for Wellbeing", "Community"],
    excerpt: "Sharing an old photo recently brought an unexpected and beautiful message from the son of one of our former participants.",
    body: blocks(
      "I recently shared a throwback photo from 2015, when I met the incredible Gareth Malone at Latitude Festival. I was teaching music in a local high school at the time, and little did I know that meeting would set me on the path to founding Swell Music CIC. It was the best thing I ever did, and I will always be grateful to Gareth for the inspiration. When I shared that photo, something unexpected happened that reminded me of just how deep the roots of this work go.",
      "A message came through from Richard, the son of one of our former participants, a wonderful woman called Dot. He said simply: still spreading the love, Helen. Bless you. I had to stop for a moment when I read that. I often think of dear Dot. We had such lovely times together in the group, and the friendship we shared meant so much to me. Hearing from her son, knowing that what we do here reaches out beyond the sessions themselves and into the lives of families, was one of those moments that reminds you what really matters.",
      "This is what music for wellbeing truly is. It is not just about breath support or social connection, though both of those things are real and important. It is about the relationships that form over time, the care that grows between people who come together around music, and the way that care carries on even when someone is no longer with us. We carry our participants with us, and I think they carry us too. Thank you, Richard. And thank you, Dot, for every wonderful moment we shared.",
    ),
  },
  {
    _id: "news-gareth-malone-origin-2024",
    _type: "newsPost",
    title: "The Beginning, How a Meeting with Gareth Malone Changed Everything",
    slug: { _type: "slug", current: "our-story-gareth-malone-latitude-festival" },
    publishedAt: "2024-11-05T08:00:00Z",
    author: "Swell Music CIC",
    categories: ["Our Story"],
    excerpt: "In 2015, I was a music teacher when I met Gareth Malone at Latitude Festival. I did not know it then, but that encounter would change the entire course of my life.",
    body: blocks(
      "In 2015, I was teaching music at a local high school when I went to Latitude Festival and found myself face to face with Gareth Malone. I remember it so clearly. I was already passionate about the power of singing and music in people's lives, but seeing and hearing Gareth speak about what singing could do for communities, for health, for connection, something clicked into place. Little did I know then that I would one day take the brave leap to become a singing-for-health leader myself. It is the best thing I have ever done, and I am so grateful for that moment of inspiration.",
      "The journey from that summer afternoon at Latitude to where Swell Music CIC is today has been full of learning, courage, joy and the occasional wobble. Leaving a secure teaching career to start a social enterprise is not a small thing. But the pull towards this work was too strong to ignore. I trained as a singing-for-health practitioner, became accredited with Asthma and Lung UK, and began building the sessions, partnerships and community that have grown into what you see today. None of it would have happened without the people who said yes, who came through the door, who sang with us when they were not sure they could.",
      "Sharing that old photo recently brought a message from one of our community members that I will never forget. We are so glad you took that leap Helen, she wrote, for all the joy you bring into our lives. And I wrote back: it is all of you that bring me the joy. That exchange, between a music teacher who took a chance and the community that caught her, is really what Swell Music CIC is all about. Thank you, Gareth, for the spark. And thank you to every single person who has been part of this journey since.",
    ),
  },
  {
    _id: "news-wired-sounds-launch-2021",
    _type: "newsPost",
    title: "Wired Sounds — An Exciting New Project for Young Neurodivergent Musicians",
    slug: { _type: "slug", current: "wired-sounds-launch-2021" },
    publishedAt: "2021-03-15T00:00:00Z",
    author: "Swell Music CIC",
    categories: ["Wired Sounds"],
    excerpt: "An exciting new project from Swell Music CIC offering support and opportunities to young neurodivergent musicians from Suffolk and Norfolk.",
    body: [
      ...blocks("Are you a neurodivergent musician aged between 17 and 25, from Suffolk or Norfolk? Do you have the potential to become a professional musician?"),
      ...blocks("Wired Sounds is an exciting new project from Swell Music CIC offering support and opportunities to five young musicians from the local area."),
      ...bulletList([
        "Individual mentoring",
        "Workshops with industry professionals",
        "A grant of £1,500 to enable you to create new music and buy essential equipment",
        "Performance opportunities at venues and festivals in 2022 across Norfolk and Suffolk",
      ]),
      ...blocks("If you would like to find out more or apply for this fantastic opportunity, which will help you take your first steps on your music career pathway, please contact Helen Hayes at info@swellmusic.org.uk or call 07917 799456. Your time is now!"),
    ],
  },
];

async function run() {
  console.log("Seeding", posts.length, "news posts into project:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  const tx = client.transaction();
  posts.forEach((p) => tx.createOrReplace(p));
  await tx.commit();
  console.log("✓ All", posts.length, "posts seeded");
}

run().catch((err) => { console.error(err); process.exit(1); });
