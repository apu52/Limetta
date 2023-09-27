"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";

import { Icons } from "@/components/icons";
import { AccountType, CurrencyType } from "@/types";
import { TransferForm } from "@/components/forms/transfer-form";

export const Transfer = ({
  currency,
  initialSelected,
  investmentsBalance,
  miscellaneousBalance,
  savingsBalance,
}: {
  currency: CurrencyType;
  initialSelected: AccountType;
  savingsBalance: number;
  investmentsBalance: number;
  miscellaneousBalance: number;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        onClick={onOpen}
        className="flex justify-center p-2 group cursor-pointer"
        // className={buttonVariants({ variant: "secondary" })}
      >
        <Icons.transfer className="h-4 w-4 cursor-pointer group-hover:text-primary transition" />
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Transfer your money
              </ModalHeader>
              <TransferForm
                onClose={onClose}
                currency={currency}
                initialSelected={initialSelected}
                savingsBalance={savingsBalance}
                investmentsBalance={investmentsBalance}
                miscellaneousBalance={miscellaneousBalance}
              />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
