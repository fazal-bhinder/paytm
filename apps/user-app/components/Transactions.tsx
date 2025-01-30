import { Card } from "@repo/ui/card";

export const Transactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        status: string,
        provider: string
    }[]
}) => {
    if (!transactions.length) {
        return (
            <div className="mt-20 ml-10 w-[140vh]">
                <div className="p-4"> 
                    <Card title="Recent Transactions">
                        <div className="text-center py-8">No Recent transactions</div>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-20 ml-10 w-[140vh]">
            <div className=" p-4 "> 
                <Card title="Recent Transactions">
                    <div className="pt-4 space-y-4">
                        {transactions.map((t, index) => (
                            <div className="flex justify-between py-2 border-b border-gray-200" key={index}>
                                <div>
                                    <div className="text-sm font-medium">Received INR</div>
                                    <div className="text-slate-600 text-xs">{t.time.toDateString()}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-semibold text-green-600">
                                        + Rs {t.amount / 100}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};
