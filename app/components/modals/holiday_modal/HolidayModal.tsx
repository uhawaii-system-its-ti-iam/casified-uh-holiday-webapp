'use client';

import { Button, Group, Stack, Text } from '@mantine/core';
import { ContextModalProps, modals } from '@mantine/modals';

const HolidayModal = ({
    context,
    id,
    innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
    <>
        {innerProps.modalBody}
        <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
            Close
        </Button>
    </>
);

// TODO: Use Holiday.ts type from GROUPINGS-1499
type Holiday = {
    description: string;
    observedDateFull: string;
    officialDateFull: string;
}

export const displayHolidayModal = (holiday: Holiday) => {
    modals.openContextModal({
        modal: 'holiday',
        title: holiday.description,
        innerProps: {
            modalBody: (
                <Group justify='space-between'>
                    <Stack>
                        <Text fw={700}>Observed Date</Text>
                        <Text>{holiday.observedDateFull}</Text>
                    </Stack>
                    <Stack>
                        <Text fw={700}>Official Date</Text>
                        <Text>{holiday.officialDateFull}</Text>
                    </Stack>
                </Group>
            )
        }
    });
}
 
export default HolidayModal;
