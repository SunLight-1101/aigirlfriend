import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    """Configuration class for AI Girlfriend Agent"""

    # Anthropic API Configuration
    ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")

    # Model Configuration
    MODEL_NAME = "claude-3-5-sonnet-20241022"
    MAX_TOKENS = 4096
    TEMPERATURE = 0.8

    # Database Configuration
    DB_PATH = os.getenv("DB_PATH", "memory.db")

    # Memory Configuration
    MAX_RELEVANT_MEMORIES = 5
    SIMILARITY_THRESHOLD = 0.5

    @classmethod
    def validate(cls) -> bool:
        """Validate required configuration"""
        if not cls.ANTHROPIC_API_KEY:
            raise ValueError("ANTHROPIC_API_KEY not found in environment variables")
        return True
