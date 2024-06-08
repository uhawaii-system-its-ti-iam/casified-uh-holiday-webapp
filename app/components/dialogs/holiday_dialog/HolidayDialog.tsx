/*
'use client';

import { Button } from "@/components/ui/button"
import { Group, Stack, Text } from '@mantine/core';
import { ContextModalProps, modals } from '@mantine/modals';
import {Holiday} from "@/components/tables/holidays_table/Holiday";

const HolidayDialog = ({
    context,
    id,
    innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
    <>
        {innerProps.modalBody}
        <Button variant="outline" onClick={() => context.closeModal(id)}>
            Close
        </Button>
    </>
);

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
 
export default HolidayDialog;
*/

/*'use client';

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ContextModalProps, modals } from '@mantine/modals';
import {Holiday} from "@/components/tables/holidays_table/Holiday";

const HolidayDialog = ({
    context,
    id,
    innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
    <>
        {innerProps.modalBody}
        <Button variant="outline" onClick={() => context.closeModal(id)}>
      Close
        </Button>
    </>
);

export const displayHolidayDialog = (holiday: Holiday) => {
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

export default HolidayDialog;*/

'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    /*DialogTrigger,*/
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {Holiday} from '@/components/tables/holidays_table/Holiday';


export const HolidayDialog = (holiday: Holiday) => {
    return (
        <Dialog>
            {/*<DialogTrigger asChild>
              We will attempt to incorporate this when the shadcn table is implemented.
            </DialogTrigger>*/}
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Holiday: {holiday.description}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="observed" className="text-right">
                          Observed:
                        </Label>
                        <DialogDescription id="observed">
                            {holiday.observedDateFull}
                        </DialogDescription>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="official" className="text-right">
                          Official:
                        </Label>
                        <DialogDescription id="official">
                            {holiday.officialDateFull}
                        </DialogDescription>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default HolidayDialog;
