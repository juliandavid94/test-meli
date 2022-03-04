import connection from "./channel";

const data = {"author": {"lastname": "Rojas Ordoñez", "name": "Julian David"}, "categories": null, "items": [{"address": {"city_id": "TUxBQkZMTzg5MjFa", "city_name": "Floresta", "state_id": "AR-C", "state_name": "Capital Federal"}, "condition": "new", "free_shipping": false, "id": "MLA1124925805", "picture": "http://http2.mlstatic.com/D_600099-MLA40939775511_022020-I.jpg", "price": {"amount": 590, "currency": "ARS"}, "sold_quantity": 652, "tags": ["good_quality_picture", "good_quality_thumbnail", "immediate_payment", "cart_eligible", "best_seller_candidate", "shipping_guaranteed"], "title": "Balanza De Cocina Digital Electronic Sf-400 Pesa Hasta 10kg Blanca"}, {"address": {"city_id": null, "city_name": "Villa Celina", "state_id": "AR-B", "state_name": "Buenos Aires"}, "condition": "new", "free_shipping": false, "id": "MLA935863142", "picture": "http://http2.mlstatic.com/D_847314-MLA46711190382_072021-I.jpg", "price": {"amount": 1899, "currency": "ARS"}, "sold_quantity": 3746, "tags": ["brand_verified", "extended_warranty_eligible", "good_quality_picture", "good_quality_thumbnail", "immediate_payment", "cart_eligible", "best_seller_candidate", "shipping_guaranteed"], "title": "Auricular Gamer Tedge Gt-g10 Negro Con Luz Led"}, {"address": {"city_id": null, 
"city_name": "Tortuguitas", "state_id": "AR-B", "state_name": "Buenos Aires"}, "condition": "new", "free_shipping": 
true, "id": "MLA1115891412", "picture": "http://http2.mlstatic.com/D_795594-MLA46192592195_052021-I.jpg", "price": {"amount": 13900, "currency": "ARS"}, "sold_quantity": 534, "tags": ["brand_verified", "good_quality_picture", "good_quality_thumbnail", "loyalty_discount_eligible", "immediate_payment", "cart_eligible", "best_seller_candidate", "shipping_guaranteed"], "title": "Stanley Termo Clásico 1 L Con Tapón Cebador De Acero Inoxidable Rojo"}, {"address": {"city_id": null, "city_name": "Villa Celina", "state_id": "AR-B", "state_name": "Buenos Aires"}, "condition": "new", 
"free_shipping": true, "id": "MLA1105402871", "picture": "http://http2.mlstatic.com/D_665643-MLA45385132297_032021-I.jpg", "price": {"amount": 33999, "currency": "ARS"}, "sold_quantity": 6754, "tags": ["extended_warranty_eligible", 
"good_quality_picture", "good_quality_thumbnail", "loyalty_discount_eligible", "immediate_payment", "best_seller_candidate", "meli_choice_candidate", "shipping_guaranteed"], "title": "Samsung Galaxy A12 64 Gb Negro 4 Gb Ram"}]}

it("finds products items", async () => {
  const mockFetch = Promise.resolve({ json: () => Promise.resolve(data) });
  global.fetch = jest.fn().mockImplementation(() => mockFetch);
  const data_res = await connection(10, "product");
  expect(data_res).toEqual(data);
});
