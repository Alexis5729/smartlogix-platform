package com.smartlogix.inventory.config;

import com.smartlogix.inventory.domain.InventoryItem;
import com.smartlogix.inventory.repository.InventoryItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class InventorySeedConfig {

    @Bean
    CommandLineRunner inventorySeeder(InventoryItemRepository repository) {
        return args -> {
            if (repository.count() > 0) {
                return;
            }

            repository.save(buildItem("SKU-1001", "Teclado Mecanico RGB", "WH-SCL-01", 120, 20));
            repository.save(buildItem("SKU-1002", "Mouse Inalambrico", "WH-SCL-02", 200, 30));
            repository.save(buildItem("SKU-2001", "Monitor 24 Pulgadas", "WH-VAP-02", 45, 10));
            repository.save(buildItem("SKU-3001", "Audifonos Gamer", "WH-CON-01", 80, 15));
            repository.save(buildItem("SKU-4001", "Silla Gamer Ergonómica", "WH-VAL-01", 55, 10));
            repository.save(buildItem("SKU-5001", "Elden Ring", "WH-PMQ-01", 30, 15));
            repository.save(buildItem("SKU-5002", "Counter Strike 2", "WH-PMQ-01", 40, 15));
        };
    }

    private InventoryItem buildItem(String sku, String name, String warehouse, int available, int reorderLevel) {
        InventoryItem item = new InventoryItem();
        item.setSku(sku);
        item.setProductName(name);
        item.setWarehouseCode(warehouse);
        item.setAvailableQuantity(available);
        item.setReservedQuantity(0);
        item.setReorderLevel(reorderLevel);
        return item;
    }
}
