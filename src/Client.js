import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '8qw5kgvs',
    dataset: 'production',
    apiVersion: '2022-09-16',
    useCdn: true,
    token: 'skiFiqRkH006B5mt9EhouZUB9K1l1wlXm2YL1P8MLKQhvtKlEdRCCJuc1d0TuLe2P44pXGZTYOoOMm7nQmeGU3wJjINBasybXA6ZYOkqTyeXdVUfZjHWJbLnIE1atNAlGklWyYTDfQhSSQtcybX4L8QeQylHOambTfAuU35UfeqxLtKGw1hJ',
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);