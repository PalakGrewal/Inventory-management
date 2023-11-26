import React from 'react'

const Inventory = () => {
    return (
        <section className="inventory">
            <table>
                <tr>
                    <td><a href="#">Stock List</a></td>
                    <input type="text" placeholder="Search Word" />
                    <button type="submit">Search</button>
                    <thead>
                        <tr>
                            <th>Goods Code</th>
                            <th>Goods Desc</th>
                            <th>Total Qty</th>
                            <th>On hand</th>
                            <th>Can Order</th>
                            <th>Ordered Stock</th>
                            <th>Inspect</th>
                            <th>Holding</th>
                            <th>Damage</th>
                            <th>ASN Stock</th>
                            <th>DN Stock</th>
                            <th>Pre Load</th>
                            <th>Pre Sort</th>
                            <th>Sorted Stock</th>
                            <th>Pick Stock</th>
                            <th>Picked Stock</th>
                            <th>Back Order</th>
                            <th>Cteate Time</th>
                            <th>Update Time</th>
                        </tr>
                    </thead>
                </tr>

            </table>
        </section>
    )
}

export default Inventory