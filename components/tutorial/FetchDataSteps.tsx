import Step from "./Step";
import Code from "./Code";

const create = `
create table notes (
  id bigserial primary key,
  title text
);

insert into notes(title)
values
  ('Today I created a Supabase project.'),
  ('I added some data and queried it from Next.js.'),
  ('It was awesome!');
`.trim();

const server = `
import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = cr eateClient()
  const { data: notes } = await supabase.from('notes').select()

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim();

const client = `
'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim();

export default function FetchDataSteps() {
  return (
    <div className="flex flex-col gap-6">

      <p className="mb-3 text-gray-500 dark:text-gray-400">Enter a topic you're interested in. Then, type through a generated mystery on your topic to learn about something you're interested in. Increase your typing speed, solve a mystery and learn something new! Type your topic into the box above to begin!</p>


    </div>
  );
}
