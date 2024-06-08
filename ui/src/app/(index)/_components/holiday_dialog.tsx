'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Holiday } from './holidays_table/holiday';


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
