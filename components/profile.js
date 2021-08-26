import Image from 'next/image'

export default function Profile() {
    return (
        <Image
            src="/images/profile.jpg"
            width={144}
            height={144}
            alt="Your Name"
        />
    )
}
