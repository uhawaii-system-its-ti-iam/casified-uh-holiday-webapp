import { Button } from '@/components/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from "@/components/ui/separator";
import { Label } from '@/components/ui/label';
import {CaretSortIcon} from '@radix-ui/react-icons';
import React from 'react';

const CampusCollapse = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2"
        >
            <div className="flex items-center justify-between space-x-4 px-4">
                <Button variant="ghost">Campuses</Button>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <CaretSortIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
                {/*<Text c="dimmed" mb={6} fw={500} size="sm">Universities</Text>*/}
                <Label>Universities</Label>
                <a className="link py-3" href="https://hilo.hawaii.edu/" target="_uhhi" role="link">Hilo</a>
                <a className="link py-3" href="https://manoa.hawaii.edu/" target="_uhma" role="link">Manoa</a>
                <a className="link py-3" href="http://westoahu.hawaii.edu/" target="_uhwo" role="link">West Oahu</a>

                <Separator className="my-10" />

                {/*<Text c="dimmed" mb={6} fw={500} size="sm">Community Colleges</Text>*/}
                <Label>Community Colleges</Label>
                <a className="link py-3" href="https://hawaii.hawaii.edu/" target="_uhcchi" role="link">Hawaii</a>
                <a className="link py-3" href="http://honolulu.hawaii.edu/" target="_uhccho" role="link">Honolulu</a>
                <a className="link py-3" href="http://kapiolani.hawaii.edu/" target="_uhccka" role="link">Kapiolani</a>
                <a className="link py-3" href="http://kauai.hawaii.edu/" target="_uhccku" role="link">Kauai</a>
                <a className="link py-3" href="http://www.leeward.hawaii.edu/" target="_uhccle" role="link">Leeward</a>
                <a className="link py-3" href="http://maui.hawaii.edu/" target="_uhccmu" role="link">Maui</a>
                <a className="link py-3" href="http://windward.hawaii.edu/" target="_uhccwi" >Windward</a>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default CampusCollapse;
