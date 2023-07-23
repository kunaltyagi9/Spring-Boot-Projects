package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.model.Invoice;

import java.util.List;

public interface InvoiceService {

    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoices();

    public Invoice deleteInvoice(long id);
}
