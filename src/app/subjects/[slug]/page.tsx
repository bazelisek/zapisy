'use client'

import subjects from "@/components/notes/subjects"
import { useParams } from 'next/navigation';

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = useParams();
    
    const subject = subjects.find((s) => s.id === slug);
    if (!subject) {
        return <div>Subject not found</div>;
    }
    return (
        <div>
            <h1>{subject.name}</h1>
            <p>{subject.description}</p>
        </div>
    )
}