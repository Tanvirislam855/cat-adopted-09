"use client";

import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";


export function BookingCancelAlert({bookId}) {
    const handleCancelBook = async() =>{
        const res = await fetch (`http://localhost:8000/book/${bookId}`,{
             method: "DELETE",
             headers: {
            "content-type": "application/json"

        }
        })
        const data = await res.json();
        window.location.reload();

    }
  return (
    <AlertDialog>
     <Button className={" rounded-2xl text-red-600 border-red-700"} variant="outline"><TrashBin/> cancle</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Booking Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancelBook} slot="close" variant="danger">
                Booking Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}