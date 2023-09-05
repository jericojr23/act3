function GoalItem() {
        return (
            <View key={itemData.index} style={styles.goalItemContainer}>
                <Text style={styles.goalItemHeader}>
                    Goal {itemData.index + 1}:
                </Text>
                <Text style={styles.goalItemText}>{itemData.item}</Text>
            </View>
        );
};

const colors = {
	primary: "#f8f4e3",
	secondary: "#706c61",
	accent: "#2a2b2a",
};