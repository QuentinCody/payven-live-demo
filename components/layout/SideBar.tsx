import Link from 'next/link';
import { Package2Icon } from '@/components/icons/Package2Icon';
import { Button } from '@/components/ui/button';
import { BellIcon } from '@/components/icons/BellIcon';
import { HomeIcon } from '@/components/icons/HomeIcon';
import { LineChartIcon } from '@/components/icons/LineChartIcon';

const SideBar: React.FC = () => {
    return (
        <div key="1" className="grid min-h-screen w-full grid-cols-[280px_1fr] dark:bg-gray-950">
            <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[56px] items-center border-b px-6">
                        <Link className="flex items-center gap-2 font-semibold" href="#" prefetch={false}>
                            <Package2Icon className="h-6 w-6" />
                            <span>Payven Inc</span>
                        </Link>
                        <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                            <BellIcon className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <Link
                            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                            href="#"
                            prefetch={false}
                        >
                            <HomeIcon className="h-4 w-4" />
                            Overview
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                            prefetch={false}
                        >
                            <LineChartIcon className="h-4 w-4" />
                            Analysis
                        </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;