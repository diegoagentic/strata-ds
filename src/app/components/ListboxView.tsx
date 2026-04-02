import { Listbox, ListboxOption, ListboxLabel, ListboxDescription } from '../../components/catalyst/listbox';
import { Field, Label, Description } from '../../components/catalyst/fieldset';
import { CopyButton } from './CopyButton';
import { useState } from 'react';

const people = [
    { id: 1, name: 'Durward Reynolds', description: 'Available' },
    { id: 2, name: 'Kenton Towne', description: 'Busy' },
    { id: 3, name: 'Therese Wunsch', description: 'Do not disturb' },
    { id: 4, name: 'Benedict Kessler', description: 'Offline' },
    { id: 5, name: 'Katelyn Rohan', description: 'In a meeting' },
];

export function ListboxView() {
    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <div>
            <div className="mb-8 flex items-start justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                        Listbox
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        An accessible, styled select menu for choosing from a list of options.
                    </p>
                </div>
            </div>

            {/* Examples */}
            <div className="grid grid-cols-1 gap-10">

                {/* Basic Listbox */}
                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                        Basic Listbox
                    </h2>
                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 bg-white dark:bg-zinc-900 h-64">
                        <div className="w-full max-w-xs">
                            <Field>
                                <Label>Assignee</Label>
                                <Listbox value={selectedPerson} onChange={(val: any) => setSelectedPerson(val)}>
                                    {people.map((person) => (
                                        <ListboxOption key={person.id} value={person}>
                                            <ListboxLabel>{person.name}</ListboxLabel>
                                            <ListboxDescription>{person.description}</ListboxDescription>
                                        </ListboxOption>
                                    ))}
                                </Listbox>
                                <Description>Choose who to assign this task to.</Description>
                            </Field>
                        </div>
                    </div>
                    <div className="mt-4">
                        <CopyButton
                            formats={[{
                                label: 'React', value: `<Listbox value={selected} onChange={setSelected}>
  {people.map((person) => (
    <ListboxOption key={person.id} value={person}>
      <ListboxLabel>{person.name}</ListboxLabel>
      <ListboxDescription>{person.description}</ListboxDescription>
    </ListboxOption>
  ))}
</Listbox>` }]}
                        />
                    </div>
                </section>

                {/* Usage Guidelines */}
                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                        Usage Guidelines
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-success-light dark:bg-success/10 border border-success/20 dark:border-success/30 rounded-md p-6">
                            <h3 className="text-lg font-semibold text-success dark:text-success-light mb-2">Do's</h3>
                            <ul className="list-disc list-inside text-sm text-success dark:text-success-light space-y-1">
                                <li>Use <code>Listbox</code> for single selection from a list of 5-15 items.</li>
                                <li>Include descriptions for complex options.</li>
                            </ul>
                        </div>
                        <div className="bg-error-light dark:bg-error/10 border border-error/20 dark:border-error/30 rounded-md p-6">
                            <h3 className="text-lg font-semibold text-error dark:text-error-light mb-2">Don'ts</h3>
                            <ul className="list-disc list-inside text-sm text-error dark:text-error-light space-y-1">
                                <li>Don't use <code>Listbox</code> for lists with &gt;15 items (use <code>Combobox</code> instead).</li>
                                <li>Don't use for multi-selection (use <code>Combobox</code> or Checkbox Group).</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
